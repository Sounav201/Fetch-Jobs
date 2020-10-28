export const DisplayJobs = (job, currency) =>
    `
        <div class="card-data">
            <p class="job-posting-time">
                5h ago
            </p>
            <h3>${job.title}</h3>
            <h4>${job.company.display_name}</h4>
            <p>Up to ${currency}${job.salary_max}</p> 
            <div class="card-footer">
                <p>${job.location.display_name}</p>
                <a href="${job.redirect_url}" target="_blank">Know More</a>
            </div>
        </div>
        `;
