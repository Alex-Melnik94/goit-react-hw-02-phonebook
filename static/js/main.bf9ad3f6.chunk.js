(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={container:"styles_container__2E8b1"}},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=n(13),i=n(3),l=n(4),u=n(6),b=n(5),m=n(11),h=n(21),j=n(2),f=n.n(j),d=n(0),p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onSubmitHandler=function(e){e.preventDefault();var n={id:Object(h.a)(),name:t.state.name,number:t.state.number};t.props.onSubmit(n),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t.handleChange=function(e){t.setState(Object(m.a)({},e.target.name,e.target.value))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{className:f.a.form,onSubmit:this.onSubmitHandler,autoComplete:"off",children:[Object(d.jsxs)("label",{className:f.a.label,children:["Name",Object(d.jsx)("input",{className:f.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:this.state.name})]}),Object(d.jsxs)("label",{className:f.a.label,children:["Number",Object(d.jsx)("input",{className:f.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:this.state.number})]}),Object(d.jsx)("button",{className:f.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=n(9),_=n.n(O),x=function(t){var e=t.value,n=t.onChange;return Object(d.jsxs)("label",{className:_.a.label,children:["Find contacts by name",Object(d.jsx)("input",{className:_.a.input,type:"text",value:e,onChange:n})]})},C=n(7),v=n.n(C),g=function(t){var e=t.filteredContacts,n=t.onDelete;return Object(d.jsx)("ul",{className:v.a.list,children:e.map((function(t){return Object(d.jsxs)("li",{className:v.a.item,children:[t.name,": ",t.number,Object(d.jsx)("button",{className:v.a.button,type:"button",onClick:function(){n(t.id)},children:"Delete"})]},t.id)}))})},y=n(12),N=n.n(y),S=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.setContact=function(e){var n=t.state.contacts.find((function(t){return t.name===e.name}));n?alert("".concat(n.name," is already in contacts")):t.setState((function(t){return{contacts:[e].concat(Object(s.a)(t.contacts))}}))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}));return Object(d.jsxs)("div",{className:N.a.container,children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(p,{onSubmit:this.setContact}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(x,{value:this.state.filter,onChange:this.changeFilter}),Object(d.jsx)(g,{filteredContacts:e,onDelete:this.onDeleteContact})]})}}]),n}(c.a.Component);o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"contact-form_form__2BaD4",label:"contact-form_label__2jQD-",input:"contact-form_input__1-FQX",button:"contact-form_button__3QgQG"}},7:function(t,e,n){t.exports={list:"contact-list_list__4iNmj",item:"contact-list_item__1Q7d7",button:"contact-list_button__3ZE78"}},9:function(t,e,n){t.exports={label:"filter_label__3xQFq",input:"filter_input__33C2h"}}},[[19,1,2]]]);
//# sourceMappingURL=main.bf9ad3f6.chunk.js.map