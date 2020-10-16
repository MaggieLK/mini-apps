function F1(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    id: "form1"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "name"
  }, "Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    onChange: props.handleChange,
    required: true
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "email",
    id: "email",
    onChange: props.handleChange
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "password"
  }, "Password:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "password",
    id: "password",
    onChange: props.handleChange
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    onClick: props.clicker,
    className: "next"
  }, "Next")));
}

export { F1 };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9GMS5qc3giXSwibmFtZXMiOlsiRjEiLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImNsaWNrZXIiXSwibWFwcGluZ3MiOiJBQUNBLFNBQVNBLEVBQVQsQ0FBYUMsS0FBYixFQUFvQjtBQUNoQixzQkFDQSw4Q0FDRTtBQUFPLElBQUEsRUFBRSxFQUFDO0FBQVYsa0JBQ0U7QUFBTyxJQUFBLE9BQU8sRUFBQztBQUFmLGFBREYsZUFFRTtBQUFPLElBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsSUFBQSxJQUFJLEVBQUMsTUFBeEI7QUFBK0IsSUFBQSxFQUFFLEVBQUMsTUFBbEM7QUFBeUMsSUFBQSxRQUFRLEVBQUVBLEtBQUssQ0FBQ0MsWUFBekQ7QUFBdUUsSUFBQSxRQUFRO0FBQS9FLElBRkYsZUFFMEYsK0JBRjFGLGVBR0U7QUFBTyxJQUFBLE9BQU8sRUFBQztBQUFmLGNBSEYsZUFJRTtBQUFPLElBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsSUFBQSxJQUFJLEVBQUMsT0FBeEI7QUFBZ0MsSUFBQSxFQUFFLEVBQUMsT0FBbkM7QUFBMkMsSUFBQSxRQUFRLEVBQUVELEtBQUssQ0FBQ0M7QUFBM0QsSUFKRixlQUltRiwrQkFKbkYsZUFLRTtBQUFPLElBQUEsT0FBTyxFQUFDO0FBQWYsaUJBTEYsZUFNRTtBQUFPLElBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsSUFBQSxJQUFJLEVBQUMsVUFBeEI7QUFBbUMsSUFBQSxFQUFFLEVBQUMsVUFBdEM7QUFBaUQsSUFBQSxRQUFRLEVBQUVELEtBQUssQ0FBQ0M7QUFBakUsSUFORixlQU15RiwrQkFOekYsZUFPRTtBQUFRLElBQUEsT0FBTyxFQUFFRCxLQUFLLENBQUNFLE9BQXZCO0FBQWdDLElBQUEsU0FBUyxFQUFDO0FBQTFDLFlBUEYsQ0FERixDQURBO0FBYUg7O0FBRUQsU0FBUUgsRUFBUiIsInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gRjEgKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gIGlkPVwiZm9ybTFcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPjwvaW5wdXQ+PGJyPjwvYnI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0+PC9pbnB1dD48YnI+PC9icj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfT48L2lucHV0Pjxicj48L2JyPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmNsaWNrZXJ9IGNsYXNzTmFtZT1cIm5leHRcIiA+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7RjF9Il19