import {
  ActivityIndicator,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectIdentity } from "../../core/store/selectors/identity.selectors";
import { useEffect } from "react";
import {
  selectTickets,
  selectTicketsLoaded,
  selectTicketsWithStatusCount,
} from "../../core/store/selectors/ticket.selectors";
import { AppDispatch } from "../../core/store/store";
import ContainerLayout from "../../components/layout/ContainerLayout";
import { logo } from "../../styles/images";
import TicketSummaryNavigation from "./TicketSummaryNavigation";
import { Routes } from "../../navigation/routes";
import { TicketStatus } from "../../core/types/constants/ticketStatus";
import { fetchTickets } from "../../core/store/app.effects";
import { Colors } from "../../styles/colors";
import { useTranslation } from "react-i18next";
import { selectTheme } from "../../core/store/selectors/theme.selectors";

type TicketsScreenProps = {
  navigation: any;
};

export default function TicketsScreen(props: TicketsScreenProps): JSX.Element {
  const { navigation } = props;
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation("global");
  const theme = useSelector(selectTheme);
  /** Store **/
  const identity = useSelector(selectIdentity);
  const ticketsLoaded = useSelector(selectTicketsLoaded);
  const tickets = useSelector(selectTickets);
  const newTicketsCount = useSelector(
    selectTicketsWithStatusCount(TicketStatus.NEW)
  );
  const openTicketsCount = useSelector(
    selectTicketsWithStatusCount(TicketStatus.OPEN)
  );
  const inProgressTicketsCount = useSelector(
    selectTicketsWithStatusCount(TicketStatus.IN_PROGRESS)
  );
  const waitingTicketsCount = useSelector(
    selectTicketsWithStatusCount(TicketStatus.WAITING)
  );
  const doneTicketsCount = useSelector(
    selectTicketsWithStatusCount(TicketStatus.DONE)
  );

  /** Initial loading of tickets **/
  useEffect(() => {
    if (!ticketsLoaded) {
      dispatch(fetchTickets(identity!.access_token));
    }
  }, [ticketsLoaded]);

  /** Handle click on navigation-item **/
  function ticketSummaryNavigationPressHandler(
    ticketStatus?: TicketStatus
  ): void {
    if (ticketStatus) {
      navigation.navigate(Routes.TICKETS_LIST, { ticketStatus: ticketStatus });
    } else {
      navigation.navigate(Routes.TICKETS_LIST);
    }
  }

  return (
    // <SafeAreaView style={styles.safeAreaView}>
    <ContainerLayout>
      {ticketsLoaded ? (
        <View style={styles.container}>
          <View style={styles.headerRow}>
            <Image
              style={[
                styles.ambielLogo,
                { tintColor: theme === "dark" ? "white" : "black" },
              ]}
              source={logo}
            />
          </View>

          <TicketSummaryNavigation
            numberOfTickets={newTicketsCount}
            label={t("ticketlist_new")}
            iconColor={Colors.lightRed}
            backgroundColor="rgba(255, 82, 82, 0.1)"
            onPress={() =>
              ticketSummaryNavigationPressHandler(TicketStatus.NEW)
            }
          />

          <TicketSummaryNavigation
            numberOfTickets={openTicketsCount}
            label={t("ticketlist_open")}
            iconColor={Colors.yellow}
            backgroundColor={Colors.lightYellow}
            onPress={() =>
              ticketSummaryNavigationPressHandler(TicketStatus.OPEN)
            }
          />

          <TicketSummaryNavigation
            numberOfTickets={inProgressTicketsCount}
            label={t("ticketlist_in_progress")}
            iconColor={Colors.ambielBlue}
            backgroundColor="rgba(13, 169, 239, 0.1)"
            onPress={() =>
              ticketSummaryNavigationPressHandler(TicketStatus.IN_PROGRESS)
            }
          />

          <TicketSummaryNavigation
            numberOfTickets={waitingTicketsCount}
            label={t("ticketlist_waiting")}
            iconColor={Colors.grey}
            backgroundColor={Colors.middleGrey}
            onPress={() =>
              ticketSummaryNavigationPressHandler(TicketStatus.WAITING)
            }
          />

          <TicketSummaryNavigation
            numberOfTickets={doneTicketsCount}
            label={t("ticketlist_done")}
            iconColor={Colors.green}
            backgroundColor={Colors.lightGreen}
            onPress={() =>
              ticketSummaryNavigationPressHandler(TicketStatus.DONE)
            }
          />

          {/*
            <TicketSummaryNavigation
              label='Alle Tickets'
              iconColor='rgba(67, 217, 163, 0.8)'
              backgroundColor='rgba(67, 217, 163, 0.1)'
              onPress={() =>
                ticketSummaryNavigationPressHandler(TicketStatus.BILLED)
              }
            />
            */}
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            color={Colors.ambielBlue}
            style={{ marginBottom: 10 }}
          />
          <Text>Tickets werden geladen...</Text>
        </View>
      )}
    </ContainerLayout>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: 30,
  },
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 50,
  },
  headerRow: {
    marginBottom: 18,
  },
  ambielLogo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
