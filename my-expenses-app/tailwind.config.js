import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", 
            "./src/**/*.{js,jsx,ts,tsx}",
            "./node_modules/@material-tailwind/react/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
})

