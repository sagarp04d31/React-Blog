import { useSelector } from 'react-redux';

function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return(
    <div className={ theme }>
      <div className="dark:bg-black dark:text-white">
        { children }
      </div>
    </div>
  )
}

export default ThemeProvider;
