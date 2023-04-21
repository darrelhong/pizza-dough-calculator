import { toggleTheme } from '../utils/dark-mode';

export const NavBar = () => (
  <div class="sticky top-0 py-3 px-4 w-full border-b border-slate-900/10 dark:border-slate-300/20 backdrop-blur bg-white/60 dark:bg-slate-900/50 z-40">
    <div class="max-w-xl mx-auto flex justify-between ">
      <p>🍕</p>
      <button onClick={toggleTheme} class="dark:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width={1.5}
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      </button>
    </div>
  </div>
);
