import React from "react";

const Option1Content = () => {
    return <div>Content for Option 1</div>;
};

const Option2Content = () => {
    return <div>Content for Option 2</div>;
};

const UserContent = ({ userName }) => {
    return <div>Content for {userName}</div>;
};

const TeamContent = ({ teamName }) => {
    return <div>Content for {teamName}</div>;
};

const FilesContent = () => {
    return <div>Content for chiles</div>;
};

export {
    Option1Content,
    Option2Content,
    UserContent,
    TeamContent,
    FilesContent,
};
