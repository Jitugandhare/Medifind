import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  padding: 20px;
  margin: 20px;
  border: 1px solid #ddd;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  width: 90%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width:90%;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const EnquiryForm = () => {
  return (
    <FormWrapper>
      <h2>Enquiry Form</h2>
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" />
        </FormGroup>
        <FormGroup>
          <Label>Message</Label>
          <TextArea rows="4"></TextArea>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </FormWrapper>
  );
};

export default EnquiryForm;
