import { useRoutes } from "react-router-dom";
import { Fragment, lazy, Suspense } from "react";
// import { CreateSkill } from "./pages/create-skill";

const CreateSkill = lazy(() => import("./pages/create-skill"));
const Header = lazy(() => import("./components/organisms/shared/header"));
const CreateJob = lazy(() => import("./pages/create-job"));
const JobList = lazy(() => import("./pages/job-list"));
const Favorite = lazy(() => import("./pages/Favorite"));
const JobDetail = lazy(() => import("./pages/job-detail"));

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <JobList />,
      children: [{ path: "/jobs/detail/:jobId", element: <JobDetail /> }],
    },
    { path: "/jobs/new", element: <CreateJob /> },
    { path: "/skills/new", element: <CreateSkill /> },
    { path: "/favorite", element: <Favorite /> },
  ]);
  return (
    <Fragment>
      <Suspense fallback={<p>loading....</p>}>
        <Header />
        {routes}
      </Suspense>
    </Fragment>
  );
}

export default App;
