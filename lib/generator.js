const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');

async function generator(projectName, templateName) {

    const templateDir = path.join(__dirname, `../templates/${templateName}`);
    const targetDir = path.join(process.cwd(), projectName);

    try {
        if (!projectName) {
            const answers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'projectName',
                    message: 'Enter the project name:',
                    validate: input => !!input || 'The project name is required'
                }
            ]);
            projectName = answers.projectName;
        }
        if (fs.existsSync(targetDir)) {
            const { overwrite } = await inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'overwrite',
                    message: `Directory ${projectName} already exists. Overwrite?`,
                    default: false
                }
            ]);

            if (!overwrite) {
                console.log(chalk.yellow('Cancellation.'));
                return;
            }

            await fs.remove(targetDir);
        }

        await fs.copy(templateDir, targetDir);

        const packageJsonPath = path.join(targetDir, 'package.json');
        const packageJson = await fs.readJson(packageJsonPath);
        packageJson.name = projectName;
        await fs.writeJson(packageJsonPath, packageJson, { spaces: 2});

        console.log(chalk.green(`Template ${templateName} successfully created at ${projectName}!`));
        console.log(chalk.blue(`\nFor start coding:\n`));
        console.log(`  cd ${projectName}`);
        console.log(`  yarn install`);
        console.log(`  yarn start\n`);

    } catch (error) {
        console.error(chalk.red('Error when creating a project:'), error);
        process.exit(1);
    }
}

module.exports = generator;