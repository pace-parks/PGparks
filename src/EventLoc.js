import React, { useState, useEffect } from 'react';


const EventLoc = () => {
  const [sessID, setSessID] = useState()
  const [loc, setLoc] = useState([])
  const [logDescLoc, setLogDescLoc] = useState([])

  // Start of API call to get session ID
  const url = "https://mdpgparks.myvscloud.com/api/web/authenticate/login?APIKey=62634b6361616368686c6450634a546e&username=api";
  const sessionId = async () => {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
      .then(data => setSessID(data) )
  }
  //get facility location based on selected event type
  const facLoc = async (eventType) => {
    console.log(sessID?.sessionID)
    const url_loc = `https://mdpgparks.myvscloud.com/api/web/search/get/ARSection?sessionid=${sessID?.sessionID}&fields=ARSection_FacilityLocation,ARSection_BeginDate,ARSection_Typecode&ARSection_typecode_filter=performing arts&ARSection_Typecode_filterby=eq&ARSection_DisplayOnWeb_filter=yes&ARSection_BeginDate_filterby=ge&ARSection_BeginDate_filter=12/19/24&ARSection_RecordStatus_filter=active&count=3000`
    await fetch(url_loc)
      .then(res => res.json())
      .then(data => {
        // Remove duplicates based on arsection_facilitylocation
        const uniqueLocations = data?.records?.filter((value, index, self) =>
          self.findIndex(v => v.arsection_facilitylocation === value.arsection_facilitylocation) === index
        );
        console.log(uniqueLocations)
        // Store the result in setLoc
        setLoc(uniqueLocations);
      });
  };

  // get log descriptions & facility location
  const url_desc = `https://mdpgparks.myvscloud.com/api/web/search/get/FRLocation?sessionid=${sessID?.sessionID}&fields=FRLocation_LongDescription,FRLocation_PrimaryPhoneNumber,FRLocation_Address1,FRLocation_City,FRLocation_State,FRLocation_ZipCode,FRLocation_FacilityLocation&FRLocation_FacilityLocation_filter=FSC&FRLocation_FacilityLocation_filterby=eq`
  const logDesc = async () => {
    await fetch(url_desc)
      .then(res => (res.json()))
      .then(data => console.log(data) )//setLogDescLoc(data.records)
  }
  useEffect(() => {
    const fetchData = async () => {
      await sessionId();
      await facLoc();
      await logDesc();
    };
    fetchData();

  }, [])
console.log('Location', loc)
console.log('LongDesc: ', logDescLoc)
  return (
    <>

    </>
  );
};

export default EventLoc;
