import { FetchJobs } from "./Fetch_Job";

const jobSearch = new FetchJobs('#search-form', '.cards');
jobSearch.setCountryCode();
jobSearch.GetForm();