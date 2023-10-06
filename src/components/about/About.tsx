import axios from 'axios';
import React, { useEffect, useState } from 'react';

const About = () => {

    const [member, setMember] = useState<any>();

  useEffect(() => {
    axios.get('/api/member').then((res) => setMember(res))
    .catch(e => console.log(e));
  }, []);

  // dom
//   const memberList = member.map((m: any) => <p>{m.name}</p>);
  
    return (
        <div>
           
        </div>
    );
};

export default About;