import React  from 'react';

const Blog = () => {
   
    return (
        <div className='mx-auto w-75'>
            <section>
                <h3 className='my-4'>What are the different ways to manage a state in a React application?</h3>
                <p>
                    There are mainly four types of state in react which are local state,global state,serve state and url state.
                    The most commong method to manage a state is by using hooks.Different types of hooks in react which are used
                    to managed states includes useState,useEffect,useRef and useContext etc.To share a state in all over the app one can
                    use useContext and to keep a value one can use useState.
                </p>
            </section>
            <section>
                <h3 className="my-4">How does prototypical inheritance work?</h3>
                <p>The prototypical inheritance is feature in JavaScript 
                   by which an object can inherit method n object can inherit the properties and methods of another object.
                   When a property is missing from object JavaScript automaticallly takes it form a prototype.This 
                   system is known as prototypical inheritance.
                   </p>
            </section>
            <section>
                <h3 className="my-4">What is a unit test? Why should we write unit tests?</h3>
                <p>The unit testing is done to make sure if a code written for a purpose is being run 
                    the way it has been intended.We need to write unit testing before implementing a progarm.
                    That it is made sure that the code we have written is well-structured enough to use for a purpose.
                </p>
            </section>
            <section>
                <h2 className="my-4">What is the difference between React vs. Angular vs. Vue?</h2>
                <p>Angular codes known as directive which uses the MVC pattern of JavaScript.It seperates different
                part of UI as HTML tags.

                On the other hand, React combines the UI components of same behaviour and make them reusable.It makes the
                laoding of an application very faster and customizing process of an app mucch easier.

                In Vue UI and behaviours are also considered as a part of component.Vue is highly customizable and CSS preprocessor
                can be easily used with Vue to make UI design more attractive.
                </p>
            </section>
        </div>
    );
};

export default Blog;