import React from 'react';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import DetailsLayout from "../components/DetailsLayout"
import AllLostData from "../assets/constants/allLostDoc.json";
import AllLostDoc from '../components/AllLostDoc'
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#646060',
    }}
  />
);

const onSearch = value => console.log(value);
const AllLostDocument=()=>{
    return(
        <div className='userAllDoc'>
            <DetailsLayout>
                <center>
                <div className='texto'>
                  <p>You can find all information about all Users Lost Document now!!! </p>
                </div>
                
                <div className='userSearch'>
                <Space direction="vertical">
            <Search
      placeholder="input search text"
      enterButton="Search"
     
      size="large"
      style={{ width: 700 }}
      suffix={suffix}
      onSearch={onSearch}
    />
  </Space>

                </div>
              

                </center>
           
            
                </DetailsLayout>
              

                <div className='userLost-container'>
               
                    {
                        AllLostData.map((data)=>(<AllLostDoc user={data}/>))
                    }

                </div>

        </div>


     
         





  

       
    )
}
export default AllLostDocument;
