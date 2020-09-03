import React from "react";
import useAbortableFetch from "use-abortable-fetch";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import LabeledInput from "./LabeledInput";

const UserUserDetails: React.FC = () => {
  const { userId } = useParams();
  const { data, error, loading } = useAbortableFetch<User>(
    `https://the-problem-solver-sample-data.azurewebsites.net/accounts/${userId}?nosleep=2000`
  );

  if (error) {
    return <div>Error...</div>;
  }

  if (loading || !data || typeof data === "string") {
    return <Loading />;
  }

  return (
    <div>
      <img src={data.picture} alt={data.firstname} />
      <LabeledInput label="Firstname:" value={data.firstname} />
      <LabeledInput label="Surname:" value={data.surname} />
      <LabeledInput label="Email:" value={data.email} />
      <LabeledInput label="Address:" value={data.address} />
      <LabeledInput label="Phone:" value={data.phone} />
    </div>
  );
};

export default UserUserDetails;