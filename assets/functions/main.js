document.addEventListener("DOMContentLoaded", function () {
    // Load head content
    fetch("/components/head.html")
        .then(response => response.text())
        .then(data => {
            document.head.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error("Error loading head:", error))
        .then(() => {
            // Load header and footer
            return Promise.all([
                fetch("/components/header.html")
                    .then(response => response.text())
                    .then(data => {
                        document.body.insertAdjacentHTML("afterbegin", data);
                    })
                    .catch(error => console.error("Error loading header:", error)),

                fetch("/components/footer.html")
                    .then(response => response.text())
                    .then(data => {
                        document.body.insertAdjacentHTML("beforeend", data);
                    })
                    .catch(error => console.error("Error loading footer:", error))
            ]);
        });
});
