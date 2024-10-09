import {TicketStatus} from "../types/constants/ticketStatus";
import { useTranslation } from "react-i18next";

type TicketHelper = {
    getTicketStatusLabel(statusNumber: TicketStatus): string;
};

export default function useTicketHelper(): TicketHelper {

    const { t } = useTranslation("global");

    /** Get Ticket-Status-label **/
    function getTicketStatusLabel(statusNumber: TicketStatus): string {
        switch (statusNumber) {
            case TicketStatus.OPEN:
                return t("ticketstate_open");
            case TicketStatus.NEW:
                return t("ticketstate_new");
            case TicketStatus.WAITING:
                return t("ticketstate_waiting");
            case TicketStatus.IN_PROGRESS:
                return t("ticketstate_in_progress");
            case TicketStatus.DONE:
                return t("ticketstate_done");
            case TicketStatus.COMPLETED:
                return t("ticketstate_completed");
            case TicketStatus.BILLED:
                return t("ticketstate_billed");
        }
    }

    return {
        getTicketStatusLabel
    }
    
}
