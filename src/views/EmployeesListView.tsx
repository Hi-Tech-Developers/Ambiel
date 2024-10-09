import ViewLayout from "../components/layout/ViewLayout";
import EmployeesList from "../container/Employees/EmployeesListScreen";

export default function EmployeesListView(): JSX.Element {
  return (
    <ViewLayout>
      <EmployeesList />
    </ViewLayout>
  );
}
