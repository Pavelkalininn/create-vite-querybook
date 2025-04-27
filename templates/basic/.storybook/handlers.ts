import { http, HttpResponse } from 'msw'
import {
  interfaceTasksBy143411,
  notifications,
  participationTypes,
  responsibleCompaniesForInterfaceTasks,
  workflowAlertDeltaDays,
} from './mockConst'
const url: string = import.meta.env.VITE_API_URL

export const handlers = [
  http.get(`${url}/api/null/interfaces/tasks/`, () => {
    return HttpResponse.json(interfaceTasksBy143411)
  }),
  http.get(`${url}/api/null/interfaces/task_responsible_companies/`, () => {
    return HttpResponse.json(responsibleCompaniesForInterfaceTasks)
  }),
  http.get(`${url}/api/null/systems/parameter/workflow_alert_delta_days/`, () => {
    return HttpResponse.json(workflowAlertDeltaDays)
  }),
  http.get(`${url}/api/null/accounts/participation_types/`, () => {
    return HttpResponse.json(participationTypes)
  }),
  http.get(`${url}/api/GCC/mdocs/notifications/`, () => {
    return HttpResponse.json(notifications)
  }),
]
