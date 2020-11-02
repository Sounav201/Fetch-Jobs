export const DisplayJobs = (job, currency) =>
    `
        <div class="card-data" data-aos="fade-up">
            <p class="job-posting-time">
                <span>Posted on</span> ${job.created.slice(0, 10)}
            </p>
            <h3>${job.title}</h3>
            <h4>${job.company.display_name}</h4>
            <div class="card-footer">
                <p>${job.location.display_name}</p>
                <a href="${job.redirect_url}" target="_blank">Know More</a>
            </div>
        </div>
        `;
