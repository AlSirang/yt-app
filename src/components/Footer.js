const Footer = () => {
  return (
    <div style={{ paddingTop: 30 }}>
      <div>
        Developed by{" "}
        <a href="https://github.com/alsirang" target="_blank" rel="noreferrer">
          Bashir Uddin
        </a>
      </div>
      <div>Copyright &copy; {new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
