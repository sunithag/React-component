

We use JSX which is javascript in XML syntax.

React JSX transform from XML like syntax to native javscript.

 you can simply run npm install -g react-tools to install our command-line jsx tool. 

 This tool will translate files that use JSX syntax to plain JavaScript files that can run directly in the browser. 

 For commandline jsx->js
 jsx -x jsx components/ build/

 jsx --watch src/ build/


-- The inputs to this component are called props — short for "properties".
-- it is a concise and familiar syntax for defining tree structures with attributes.
-- Components are Just Like Functions.
-- Mutating props is bad.

--With React you simply pass your event handler as a camelCased prop similar to how 
you'd do it in normal HTML. React ensures that all events behave identically in IE8 and above 
by implementing a synthetic event system.  That is, React knows how to bubble and capture events 
according to the spec, and the events passed to your event handler are guaranteed to be consistent 
with the W3C spec, regardless of which browser you're using.

If you'd like to use React on a touch device such as a phone or tablet, 
simply call React.initializeTouchEvents(true); to enable touch event handling.

Autobinding - automatically bound ot component instance. caches the bound such that it is
extremely CPU and memory efficiant. less typing also.


States:
A common way to inform React of a data change is by calling setState(data, callback). 
This method merges data into this.state and re-renders the component.

A common pattern is to create several stateless components that just render data, 
and have a stateful component above them in the hierarchy that passes its state 
to its children via props

-- You can compute within render. state doesn't need to store computed data.

-- you can uniquely identify each child by assigning it a key

--- sometimes you really want to have fine-grained control over your performance. In that case, simply override shouldComponentUpdate() to return false when you want React to skip processing of a subtree.

--As your app grows it's helpful to ensure that your components are used correctly. We do this by allowing you to specify propTypes. React.PropTypes exports a range of validators that can be used to make sure the data you receive is valid.

Mixins:

Components are the best way to reuse code in React, but sometimes very different components may share
 some common functionality. These are sometimes called cross-cutting concerns. 
 React provides mixins to solve this problem.

 React maintains a fast in-memory representation of the DOM. render() methods return a description of the DOM, 
 and React can diff this description with the in-memory representation to compute the fastest way to update the browser.

  React implements a full synthetic event system such that all event objects are guaranteed to conform to the W3C spec despite browser quirks, and everything bubbles consistently and in a performant way cross-browser. 

  On IE8 the onScroll event doesn't bubble and IE8 doesn't have an API to define handlers to the capturing phase of an event, meaning there is no way for React to listen to these events. Currently a handler to this event is ignored on IE8.

See the onScroll doesn't work in IE8 GitHub issue for more information.


Refs:

React supports a very special property that you can attach to any component that is output from render(). 
This special property allows you to refer to the corresponding backing instance of anything returned from render()