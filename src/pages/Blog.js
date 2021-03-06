import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Table } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import './blog.css';

export default function Blog() {
    const [isEditing, setIsEditing] = useState(false);
    const [editingPost, setEditingPost] = useState(null);
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            key: 1,
            title: 'Global Covid cases top 394 million',
            subject: 'Global Covid cases'
        },
        {
            id: 2,
            key: 2,
            title: 'Highway crimes/They hold a knife to the throat',
            subject: 'Highway crimes'
        },
        {
            id: 3,
            key: 3,
            title: 'Bangladesh’s Omicron tally rises to 187',
            subject: 'Bangladesh’s Omicron'
        },
        {
             id: 4,
            key: 4,
            title: 'BPL Football/Chittagong Abahani beat Rahmatganj, Sheikh Russel draw with Mohammedan',
            subject: 'BPL Football'
        },
    ])
     const onAddPost = () => {
        const randomNumber = parseInt(Math.random() * 1000, 10);
        const newPost = {
            id: randomNumber,
            title: 'Title',
            subject: 'Subject',
        };
        setDataSource((pre) =>  [...pre, newPost]);
    };
    const onDeletePost = (record) => { 
        Modal.confirm({
            title: "Are you sure, you want to delete this post record?",
            okText: 'Yes',
            okType:'danger',
            onOk: () => {
                setDataSource((pre) => pre.filter((post) => post.id !== record.id));
            },
        });  
    };
    const onEditPost = (record) => {
        setIsEditing(true);
        setEditingPost({...record});
    };
    const resetEditing = () => {
        setIsEditing(false);
        setEditingPost(null);
    }
    const editDelete = record =>  (
            <>
                <EditOutlined onClick={() => onEditPost(record)} style={{ color: "#bcb4b4", height: "20px" }} />
                <DeleteOutlined onClick={() => onDeletePost(record)} style={{ color: "#f9004d", marginLeft: 12, height: "20px" }} />
            </>
        )
    

 
    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key: '2',
            title: 'Title',
            dataIndex: 'title'
        },
        {
            key: '3',
            title: 'Subject',
            dataIndex: 'subject'
        },
        {
            key: '4',
            title: 'Actions',
            render: editDelete
            
        },
    ];
   

    return (
        <div className="blog">
            <div className="blog__header">
                <Button className="add__postbtn" onClick={onAddPost}>Add a new Post</Button>
                <Table columns={columns} dataSource={dataSource} />
                <Modal
                    title="Edit Post"
                    visible={isEditing}
                    okText="Save"
                    onCancel={() => resetEditing()}
                    onOk={() => {
                        setDataSource((pre) => pre?.map((post) => {
                                if (post.id === editingPost.id) {
                                    return editingPost
                                }    
                                return post   
                            })
                        )
                         resetEditing();
                    }}
                >
                    <Input value={editingPost?.title} onChange={(e) => {
                        setEditingPost({ ...editingPost, title: e.target.value });
                    }} />
                    <Input value={editingPost?.subject} onChange={(e) => {
                        setEditingPost({ ...editingPost, subject: e.target.value });
                    }} />
                    

                </Modal>
            </div>
        </div>

    );
}