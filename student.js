<!DOCTYPE html>
<html>
<head>
    <!-- Add your HTML head content here -->
</head>
<body>
    <div class="menuicn"></div>
    <div id="logName">Hello, User</div>
    <ul id="placement-list"></ul>
    <button id="redirect">Login</button>

    <script>
        const placementList = document.getElementById('placement-list');

        const placementHistory = [
            { company: 'Company A', year: 2022, package: '$70,000', jobTitle: 'Software Engineer', location: 'San Francisco' },
            { company: 'Company B', year: 2021, package: '$65,000', jobTitle: 'Web Developer', location: 'New York' },
            { company: 'Company C', year: 2020, package: '$60,000', jobTitle: 'Data Analyst', location: 'Chicago' },
        ];

        function displayPlacementHistory() {
            placementList.innerHTML = '';

            placementHistory.forEach((record) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <strong>Year:</strong> ${record.year}<br>
                    <strong>Company:</strong> ${record.company}<br>
                    <strong>Package:</strong> ${record.package}<br>
                    <strong>Job Title:</strong> ${record.jobTitle}<br>
                    <strong>Location:</strong> ${record.location}<br>
                `;
                placementList.appendChild(listItem);
            });
        }

        displayPlacementHistory();

        document.getElementById("redirect").addEventListener("click", function authenticate(e) {
            e.preventDefault();

            // Get the username and password values
            const user = document.getElementById("logName").textContent.trim(); // Use textContent to get the displayed username
            const pass = document.getElementById("logPassword").value;

            if (user === "" || pass === "") {
                alert("Insufficient information");
            } else {
                // Redirect to the student page
                window.location.href = "./student.html";
            }
        });
    </script>
</body>
</html>
