import React from 'react';

const Blog = () => {
    return (
        <div className='bg-violet-50'>
            <div className='w-10/12 mx-auto px-10 py-20 flex flex-col gap-3'>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-blue-500 text-2xl lg:text-4xl font-bold text-white peer-checked:bg-blue-500 peer-checked:text-secondary-content">
                    Tell us the differences between uncontrolled and controlled components.
                    </div>
                    <div className="collapse-content bg-blue-500 text-1xl lg:text-2xl py-1 peer-checked:bg-blue-400 peer-checked:text-black">
                        <p>In React, components can be categorized into two types: uncontrolled and controlled components. Uncontrolled components are those that manage their own state internally, without any input from the parent component or the user. Controlled components, on the other hand, are those that receive their state and behavior from the parent component or the user. The main difference between uncontrolled and controlled components is that uncontrolled components are simpler to use and require less code, but they can be harder to debug and test. Controlled components, on the other hand, are more flexible and easier to test, but they require more code and can be more complex to use.</p>
                    </div>
                </div>

                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-blue-500 text-2xl lg:text-4xl font-bold text-white peer-checked:bg-blue-500 peer-checked:text-secondary-content">
                    How to validate React props using PropTypes
                    </div>
                    <div className="collapse-content bg-blue-500 text-1xl lg:text-2xl py-1 peer-checked:bg-blue-400 peer-checked:text-black">
                        <p>PropTypes is a built-in feature in React that allows developers to validate the props passed to a component. PropTypes can help catch errors early in the development process by ensuring that the props passed to a component are of the correct type and shape. To use PropTypes in your React components, you first need to import the PropTypes module from the 'prop-types' package. Then, you can define the propTypes object for your component, specifying the type and shape of each prop.

</p>
                    </div>
                </div>


                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-blue-500 text-2xl lg:text-4xl font-bold text-white peer-checked:bg-blue-500 peer-checked:text-secondary-content">Tell us the difference between nodejs and express js.
                    </div>
                    <div className="collapse-content bg-blue-500 text-1xl lg:text-2xl py-1 peer-checked:bg-blue-400 peer-checked:text-black">
                        <p>Node.js is a runtime environment for executing JavaScript code outside of a web browser. It allows developers to build server-side applications using JavaScript, which can be a big advantage for those who are already familiar with the language. Express.js is a framework built on top of Node.js that provides developers with a set of tools for building web applications and APIs. The main difference between Node.js and Express.js is that Node.js is a runtime environment, while Express.js is a framework. Node.js provides the foundation for building server-side applications, while Express.js provides the tools for building web applications and APIs.</p>
                    </div>
                </div>


                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-blue-500 text-2xl lg:text-4xl font-bold text-white peer-checked:bg-blue-500 peer-checked:text-secondary-content">
                    What is a custom hook, and why will you create a custom hook?
                    </div>

                    <div className="collapse-content bg-blue-500 text-1xl lg:text-2xl py-1 peer-checked:bg-blue-400 peer-checked:text-black">
                        <p>Custom hooks are a powerful feature in React that allow developers to reuse logic across multiple components. A custom hook is simply a function that uses one or more of React's built-in hooks (such as useState or useEffect) to encapsulate some behavior or state management logic. One of the main benefits of custom hooks is that they allow developers to abstract away complex logic into reusable functions that can be easily shared across multiple components. This can help reduce code duplication and improve code maintainability.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;