import React from "react";
import {Form, Input,InputNumber,Select,Button,Space} from "antd";

const { Option } = Select;

const Document =()=>{
    const onFinish =(values)=>{

console.log(values);



    }
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            <Option value="250">+250</Option>
            <Option value="250">+250</Option>
          </Select>
        </Form.Item>

      );
      
return(

<Form onFinish={onFinish}>

<Form.Item name="Type of the document" label="Type of the Document" rules={[{required:true}]}>
<Input/>


</Form.Item>

<Form.Item name="description" label="Description" rules={[{required:true}]}>
<Input.TextArea/>

</Form.Item>


<Form.Item name="document number" label="Document number" rules={[{required:true}]}>
<Input/>


</Form.Item>






<Form.Item name="numbers" label="phone" rules={[{required:true}]}>
<Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />

</Form.Item>


<Button htmlType="submit" type="primary">Register Tour</Button>



</Form>










)




}

export default  Document;

