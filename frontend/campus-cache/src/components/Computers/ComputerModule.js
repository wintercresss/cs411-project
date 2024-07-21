import React, { useEffect} from "react";
import TabularViewer from "../Tables/TabularViewerAdmin";
import { httpClient } from "../../infra";

const ComputerModule = () => {

    const headers = [
      {field: "location_id", headerName: "LocationID",type: 'number'},
      {field: "bldg_name", headerName: "Building", type: 'singleSelect'},
    ]
  
    const getRequest = () => {
      const jwtToken = localStorage.getItem("JWTToken");
      return httpClient
        .get("/computers", {headers: {Authorization: "Bearer " + jwtToken}})
    }

    useEffect(() => {
    }, []);

    return (
        <TabularViewer title={"Computers"} grabData={getRequest} tableHeaders={headers} uniqueIdentifier={"location_id"}/>
    );
}
export default ComputerModule;