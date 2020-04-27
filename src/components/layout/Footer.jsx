import React from 'react';

export default class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="bg-dark text-white mt-5 p-4 text-center">
        Copyright &copy; {new Date().getFullYear()} Dev
      </footer>
    );
  }
}
