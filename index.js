const urlParams = new URLSearchParams(window.location.search);

const page = urlParams.get('p');

if (page) {
    if (page == "smallint-infrastructure") {
        window.location.href = "/organizations/Smallint-Infrastructure-FuG/";
    }
}