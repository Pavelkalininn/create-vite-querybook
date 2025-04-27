import type { Meta, StoryObj } from '@storybook/react'

import { Home } from './index'

const meta = {
  title: 'Demo/Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Home>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
