import React, {useState} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axios from '../axios-links';


export const FormShortenLink = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [link, setLink] = useState(null);

    const changeHandler = (value) => {
        setOriginalUrl(value)
    };

    const createLink = (event) => {
        event.preventDefault();
        axios.post('/links', {originalUrl}).then(response => {
            setLink(response.data)
        })
    };

   return (
       <>
       <Form>
           <FormGroup>
               <Label for="exampleEmail">Shorten your link!</Label>
               <Input
                   type="text" name="originalUrl"
                   placeholder="Enter Link"
                   value={originalUrl}
                   onChange={(e) => changeHandler(e.target.value)}
               />
               <Button color="primary" style={{marginTop: '15px'}} onClick={createLink}>Shorten!</Button>
           </FormGroup>
       </Form>
       {link ? (
           <div>
               <p><strong>Your link now looks like this</strong></p>
               <a href={"http://localhost:8000/links/" + link.shortUrl} target="_blank"  rel="noopener noreferrer">{`http://localhost:8000/${link.shortUrl}`}</a>
           </div>
       ): null}
       </>
   )
};