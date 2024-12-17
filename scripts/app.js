// Dummy data for the platform
const dummyData = {
    jobs: [
        { title: "Frontend Developer", company: "TechCorp", location: "Remote", description: "Build user interfaces using React.js." },
        { title: "Backend Developer", company: "DevSolutions", location: "New York, NY", description: "Develop robust APIs using Django." },
        { title: "Data Scientist", company: "DataPro", location: "San Francisco, CA", description: "Analyze large datasets to provide insights." },
    ],
    profiles: [
        { name: "Alice Johnson", skills: ["JavaScript", "React", "Node.js"], bio: "Frontend developer with 5 years of experience." },
        { name: "Bob Smith", skills: ["Python", "Django", "Flask"], bio: "Backend developer with a passion for APIs." },
    ],
    courses: [
        { title: "Learn HTML and CSS", description: "Beginner-friendly course to learn web development basics." },
        { title: "Mastering JavaScript", description: "Advanced guide to JavaScript programming." },
        { title: "Python for Data Science", description: "Learn Python with a focus on data analysis." },
    ],
    communityPosts: [
        { author: "Alice Johnson", content: "Excited to start a new job at TechCorp!" },
        { author: "Bob Smith", content: "Looking for collaborators on a new open-source project." },
    ],
};

// Populate Job Board dynamically
function populateJobBoard() {
    const jobBoardContainer = document.querySelector("#job-board");
    dummyData.jobs.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
        `;
        jobBoardContainer.appendChild(jobCard);
    });
}

// Populate Learning Center dynamically
function populateLearningCenter() {
    const learningCenterContainer = document.querySelector("#learning-center");
    dummyData.courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
        `;
        learningCenterContainer.appendChild(courseCard);
    });
}

// Populate Community dynamically
function populateCommunity() {
    const communityContainer = document.querySelector("#community-posts");
    dummyData.communityPosts.forEach(post => {
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");
        postCard.innerHTML = `
            <p><strong>${post.author}:</strong> ${post.content}</p>
        `;
        communityContainer.appendChild(postCard);
    });
}

// Initialize the pages
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector("#job-board")) populateJobBoard();
    if (document.querySelector("#learning-center")) populateLearningCenter();
    if (document.querySelector("#community-posts")) populateCommunity();
});
// Function to populate user profiles
function populateUserProfiles() {
    const userProfilesContainer = document.querySelector("#user-profiles");
    dummyData.profiles.forEach(profile => {
        const profileCard = document.createElement("div");
        profileCard.classList.add("profile-card");

        profileCard.innerHTML = `
            <img src="${profile.profilePicture}" alt="${profile.name}'s Profile Picture" class="profile-picture">
            <h3>${profile.name}</h3>
            <p><strong>Bio:</strong> ${profile.bio}</p>
            <p><strong>Skills:</strong> ${profile.skills.join(", ")}</p>
        `;

        userProfilesContainer.appendChild(profileCard);
    });
}

// Initialize the page for User Profiles
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector("#user-profiles")) populateUserProfiles();
});
