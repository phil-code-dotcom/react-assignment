function Button({ children, variant = "primary", href, onClick }) {
  // classes every button shares
  const base =
    "text-sm font-semibold cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";

  // classes that change per variant
  const variants = {
    primary:
      "py-2 px-3.5 rounded-md text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all",
    outline:
      "py-2 px-3.5 rounded-md text-blue-600 border border-blue-600 hover:bg-blue-50 dark:hover:bg-neutral-800 transition-all",
    text: "rounded text-slate-900 hover:text-blue-700 dark:text-slate-50 dark:hover:text-blue-400",
    link: "underline whitespace-nowrap text-slate-900 dark:text-slate-400",
  };

  const classes = `${base} ${variants[variant]}`;

  // with href it's a link, without it's a button
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;