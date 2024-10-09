import {EmployeeStatus} from "../types/constants/employeeStatus";

type EmployeeHelper = {
    getEmployeeStatusLabel(statusNumber: EmployeeStatus): string;
};

export default function useEmployeeHelper(): EmployeeHelper {

    /** Get Employee-Status-label **/
    function getEmployeeStatusLabel(statusNumber: EmployeeStatus): string {
        switch (statusNumber) {
            case EmployeeStatus.ACTIVE:
                return 'Aktiviert';
            case EmployeeStatus.INACTIVE:
                return 'Deaktiviert';
        }
    }

    return {
        getEmployeeStatusLabel
    }
}