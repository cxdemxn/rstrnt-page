export default function() {
    return `
        <div class="overlay">
        <div class="overlay-content container">
            <div class="overlay-menu">
                <button class="homeNavBtn" type="button" class="overlay-menu-item" data-info="menu">
                    <span>Home</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <button class="aboutNavBtn" type="button" class="overlay-menu-item" data-info="menu">
                    <span>About us</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <button class="galleryNavBtn" type="button" class="overlay-menu-item" data-info="menu">
                    <span>Gallery</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <button class="contactNavBtn" type="button" class="overlay-menu-item" data-info="menu">
                    <span>Contact</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <div class="seperator"></div>
                <button type="button" class="overlay-menu-item" data-info="menu">
                    <span>Sign in</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <button type="button" class="overlay-menu-item" data-info="menu">
                    <span>Register</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <button class="orderNavBtn" type="button">
                    Order online
                </button>         
            </div>
        </div>
    </div>
    `;
}