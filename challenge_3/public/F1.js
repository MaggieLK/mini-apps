function F1(props) {
  // class F1 extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {value: ''};
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //   }
  //   handleChange(event) {
  //     this.setState({value: event.target.value});
  //     console.log(this.state.value)
  //     event.preventDefault();
  //   }
  // const thanks = document.getElementById('form1')
  // console.log(thanks)
  // thanks.onsubmit(console.log('submit!'))
  // // const FD = new FormData(thanks);
  // // console.log(FD)
  //render () {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    id: "form1"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "name"
  }, "Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    onChange: props.handleChange
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "email"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "password"
  }, "Password:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "password"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: props.clicker,
    className: "next"
  }))); // }
}

export { F1 }; //
// formAction="http://localhost:3000/"
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9GMS5qc3giXSwibmFtZXMiOlsiRjEiLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImNsaWNrZXIiXSwibWFwcGluZ3MiOiJBQUNBLFNBQVNBLEVBQVQsQ0FBYUMsS0FBYixFQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDRSxzQkFDQSw4Q0FDRTtBQUFPLElBQUEsRUFBRSxFQUFDO0FBQVYsa0JBQ0U7QUFBTyxJQUFBLE9BQU8sRUFBQztBQUFmLGFBREYsZUFFRTtBQUFPLElBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsSUFBQSxJQUFJLEVBQUMsTUFBeEI7QUFBK0IsSUFBQSxRQUFRLEVBQUVBLEtBQUssQ0FBQ0M7QUFBL0MsSUFGRixlQUdFO0FBQU8sSUFBQSxPQUFPLEVBQUM7QUFBZixjQUhGLGVBSUU7QUFBTyxJQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLElBQUEsSUFBSSxFQUFDO0FBQXhCLElBSkYsZUFLRTtBQUFPLElBQUEsT0FBTyxFQUFDO0FBQWYsaUJBTEYsZUFNRTtBQUFPLElBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsSUFBQSxJQUFJLEVBQUM7QUFBeEIsSUFORixlQU9FO0FBQVEsSUFBQSxPQUFPLEVBQUVELEtBQUssQ0FBQ0UsT0FBdkI7QUFBZ0MsSUFBQSxTQUFTLEVBQUM7QUFBMUMsSUFQRixDQURGLENBREEsQ0F4QmdCLENBcUNuQjtBQUNBOztBQUVELFNBQVFILEVBQVIsRyxDQUVBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIEYxIChwcm9wcykge1xuLy8gY2xhc3MgRjEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICAgIHN1cGVyKHByb3BzKTtcbi8vICAgICB0aGlzLnN0YXRlID0ge3ZhbHVlOiAnJ307XG5cbi8vICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4vLyAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuLy8gICB9XG4vLyAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuXG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuXG4vLyAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52YWx1ZSlcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICB9XG5cbiAgLy8gY29uc3QgdGhhbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0xJylcbiAgLy8gY29uc29sZS5sb2codGhhbmtzKVxuICAvLyB0aGFua3Mub25zdWJtaXQoY29uc29sZS5sb2coJ3N1Ym1pdCEnKSlcbiAgLy8gLy8gY29uc3QgRkQgPSBuZXcgRm9ybURhdGEodGhhbmtzKTtcbiAgLy8gLy8gY29uc29sZS5sb2coRkQpXG5cbiAgLy9yZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtICBpZD1cImZvcm0xXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfT48L2lucHV0PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCI+PC9pbnB1dD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiPjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuY2xpY2tlcn0gY2xhc3NOYW1lPVwibmV4dFwiID48L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxuIC8vIH1cbn1cblxuZXhwb3J0IHtGMX1cblxuLy9cbi8vIGZvcm1BY3Rpb249XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXCIiXX0=