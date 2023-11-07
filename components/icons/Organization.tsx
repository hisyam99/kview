export default function IconOrganization({ size = 6 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 512 512"
      class={`w-${size} h-${size}`}
      fill="currentColor"
    >
      <path d="m373.2 204.54c20.734-2.3047 36.402-19.812 36.402-40.703v-30.719c0-22.578-18.379-40.961-40.961-40.961h-30.719c-20.891 0-38.398 15.668-40.703 36.402l-0.51172 4.5586h-102.14c-28.211 0-51.199 22.988-51.199 51.199v27.699l-3.4297 1.2305c-22.477 7.9883-37.531 29.285-37.531 53.043 0 31.078 25.242 56.32 56.32 56.32s56.32-25.242 56.32-56.32c0-23.758-15.105-45.055-37.531-53.043l-3.4297-1.2305v-27.699c0-11.316 9.1641-20.48 20.48-20.48h102.14l0.51172 4.5586c2.0977 18.84 17.305 34.047 36.148 36.148l4.5586 0.51172v91.902h-61.441c-22.578 0-40.961 18.379-40.961 40.961v40.961c0 22.578 18.379 40.961 40.961 40.961h92.16c22.578 0 40.961-18.379 40.961-40.961v-40.961c0-20.891-15.668-38.398-36.402-40.703l-4.5586-0.51172v-91.699l4.5586-0.51172zm-188.88 61.695c0 14.133-11.469 25.602-25.602 25.602s-25.602-11.469-25.602-25.602c0-14.133 11.469-25.602 25.602-25.602s25.602 11.469 25.602 25.602zm194.56 71.68v40.961c0 5.6328-4.6094 10.238-10.238 10.238h-92.16c-5.6328 0-10.238-4.6094-10.238-10.238v-40.961c0-5.6328 4.6094-10.238 10.238-10.238h92.16c5.6328 0 10.238 4.6094 10.238 10.238zm-40.961-163.84c-5.6328 0-10.238-4.6094-10.238-10.238v-30.719c0-5.6328 4.6094-10.238 10.238-10.238h30.719c5.6328 0 10.238 4.6094 10.238 10.238v30.719c0 5.6328-4.6094 10.238-10.238 10.238z" />
    </svg>
  );
}