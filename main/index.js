import {FetchJobs  } from "./Fetch_Job";

const jobSearch = new FetchJobs('#search-form', '.results');
jobSearch.setCountryCode();
jobSearch.GetForm();