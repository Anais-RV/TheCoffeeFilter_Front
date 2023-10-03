/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import "./AdminDashboard.css";
import { getAllCoffeeShops, updateCoffeeShop, deleteCoffeeShop } from '../../../services/api';

const AdminDashboard = () => {
    const [data, setData] = useState([]);
    const [editedRows, setEditedRows] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getAllCoffeeShops()
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching the coffee shops: ", error);
            });
    }, []);

    const handleEdit = (id, field, value) => {
        setEditedRows(prev => {
            let updatedRow = Object.assign({}, prev[id] || {}, { [field]: value });
            return Object.assign({}, prev, { [id]: updatedRow });
        });
    };

    const handleSave = (id) => {
        if (editedRows[id]) {
            const updatedData = editedRows[id];
            setIsLoading(true);

            updateCoffeeShop(id, updatedData)
                .then(() => {
                    console.log("Updated successfully!");
                    setIsLoading(false);
                    // Remove the edited row from the editedRows state
                    setEditedRows(prev => {
                        const newState = { ...prev };
                        delete newState[id];
                        return newState;
                    });
                })
                .catch(error => {
                    console.error("Error updating the coffee shop: ", error);
                    setIsLoading(false);
                });
        }
    };

    const handleDelete = (id) => {
        setIsLoading(true);

        deleteCoffeeShop(id)
            .then(() => {
                console.log("Deleted successfully!");
                setIsLoading(false);
                // Remove the deleted row from the data state
                setData(prev => prev.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error("Error deleting the coffee shop: ", error);
                setIsLoading(false);
    });
};

    const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'City ID',
                accessor: 'city_id',
            },
            {
                Header: 'Name',
                accessor: 'name',
                Cell: ({ row, value }) => (
                    <input 
                        type="text" 
                        defaultValue={value}
                        onBlur={e => handleEdit(row.original.id, 'name', e.target.value)}  
                    />
                )
            },
            {
                Header: 'Address',
                accessor: 'address',
                Cell: ({ row, value }) => (
                    <input 
                        type="text" 
                        defaultValue={value}
                        onBlur={e => handleEdit(row.original.id, 'address', e.target.value)}  
                    />
                )
            },
            {
                Header: 'Description',
                accessor: 'description',
                Cell: ({ row, value }) => (
                    <input 
                        type="text" 
                        defaultValue={value}
                        onBlur={e => handleEdit(row.original.id, 'description', e.target.value)}  
                    />
                )
            },
            {
                Header: 'Photo',
                accessor: 'photo',
                Cell: ({ row, value }) => (
                    <input 
                        type="text" 
                        defaultValue={value}
                        onBlur={e => handleEdit(row.original.id, 'photo', e.target.value)}  
                    />
                )
            },
            {
                Header: 'State',
                accessor: 'state',
                Cell: ({ row, value }) => (
                    <select 
                        defaultValue={value}
                        onChange={e => handleEdit(row.original.id, 'state', e.target.value)}
                    >
                        <option value="Suggested">Suggested</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                )
            },
            {
                Header: 'Save',
                accessor: 'save',
                Cell: ({ row }) => (
                    <button onClick={() => handleSave(row.original.id)}>Save</button>
                )
            },
            {
                Header: 'Delete',
                accessor: 'delete',
                Cell: ({ row }) => (
                    <button onClick={() => handleDelete(row.original.id)}>Delete</button>)
}
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data });

    return (
        <div className="admin-dashboard">
            <h2>Admin Panel</h2>
            <table {...getTableProps()} className="-striped -highlight">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>
                                        {cell.column.Header === 'Save' ? (
                                            isLoading ? (
                                                <span>Loading...</span>
                                            ) : (
                                                <button onClick={() => handleSave(row.original.id)}>Save</button>
                                            )
                                        ) : (
                                            cell.render('Cell')
                                        )}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AdminDashboard;