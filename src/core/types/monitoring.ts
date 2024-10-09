export interface IMonitoring {
    display_name: string;
    ip_address: string;
    status: number;
    information: string;
    impact: number;
    description: string;
    acknowledged: boolean;
}