import {IMonitoring} from "../monitoring";

export interface IMonitoringResponse {
    success: boolean;
    // hosts?: IMonitoring[];
    value?: Array<any>;
    error?: string;
    // length?: number;
}
