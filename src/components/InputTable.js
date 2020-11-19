import {Input, InputNumber, Table} from 'antd';


const { Column, ColumnGroup } = Table;


export const InputTable = ({data, InputOnChange}) => {
//Math.ceil()
    const tableHeight = parseFloat(getComputedStyle(document.documentElement)
        .getPropertyValue('--container-height').slice(0,-2)) - 20 - 110;


    const rowHeight = tableHeight/(data.length);



    return (
        <Table dataSource={data}  pagination={false} bordered
               onRow = {()=>{return {style: {height: rowHeight}}} }
               onHeaderRow = {()=>{return {style: {height: 1}}} }
               ellipsis
        >
            <Column title="Dostawca nr" dataIndex="dostawca" key="dostawca"/>
            <ColumnGroup title="Odbiorcy" >
                <Column title="Odbiorca nr1" dataIndex="odbiorca1" key="odbiorca1"
                        render={ (text, record) => <Input onChange={InputOnChange} placeholder="number"
                                                          bordered={false} type="number" defaultValue={text}
                                                          id={record.key} name="odbiorca1"/>}
                />
                <Column title="Odbiorca nr2" dataIndex="odbiorca2" key="odbiorca2"
                        render={ (text, record) => <Input onChange={InputOnChange} placeholder="number"
                                                          bordered={false} type="number" defaultValue={text}
                                                          id={record.key} name="odbiorca2"/>}
                />
            </ColumnGroup>
            <Column title="Cena zakupu" dataIndex="cenaZakupu" key="cenaZakupu"
                    render={ (text, record) => <Input onChange={InputOnChange} placeholder="number"
                                                      bordered={false} type="number" defaultValue={text}
                                                      id={record.key} name="cenaZakupu"/>}
            />
            <Column title="Cena sprzedazy" dataIndex="cenaSprzedazy" key="cenaSprzedazy"
                    render={ (text, record) => <Input onChange={InputOnChange} placeholder="number"
                                                      bordered={false} type="number" defaultValue={text}
                                                      id={record.key} name="cenaSprzedazy"/>}
            />
        </Table>
    );
}
