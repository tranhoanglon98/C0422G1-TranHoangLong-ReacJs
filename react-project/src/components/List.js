import React from "react";

export class List  extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            studentList: [
                {
                    name: 'Trần Hoàng Long',
                    age: '24',
                    address: 'Huế',
                    codeGymClass: 'C04'
                },
                {
                    name: 'Đào Minh Trí',
                    age: '24',
                    address: 'Quảng Nam',
                    codeGymClass: 'C12'
                },
                {
                    name: 'Trương Quang Trường',
                    age: '25',
                    address: 'Đà Nẵng',
                    codeGymClass: 'C04'
                },
                {
                    name: 'Lê Hồng Phú',
                    age: '30',
                    address: 'Đà Nẵng',
                    codeGymClass: 'C04'
                },
                {
                    name: 'Nguyễn Bá Trọng Nhân',
                    age: '28',
                    address: 'Đà Nẵng',
                    codeGymClass: 'C04'
                },
                {
                    name: 'Nguyễn Phi Hùng',
                    age: '23',
                    address: 'Đà Nẵng',
                    codeGymClass: 'C04'
                },
                {
                    name: 'Lê Anh Tài',
                    age: '28',
                    address: 'Đà Nẵng',
                    codeGymClass: 'C04'
                },
            ]
        }
    }

    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Student List</h3>
                <table className="table table-striped table-hover table-responsive">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Class</th>
                        <th colSpan='2'>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.studentList.map((student,index) =>
                        <tr>
                            <td>{index}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                            <td>{student.codeGymClass}</td>
                            <td>
                                <button className='btn btn-primary'>Edit</button>
                                </td>
                            <td>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
