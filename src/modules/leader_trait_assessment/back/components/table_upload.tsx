import { ScrollArea, Table } from '@mantine/core';
import React from 'react';

export default function TableUpload({ theadData, tbodyData }: { theadData: any, tbodyData: any }) {
  return (
    <>
      <ScrollArea>
        <Table withTableBorder horizontalSpacing="xl">
          <Table.Thead>
            <Table.Tr>
              {theadData.map((header: any) => {
                return <Table.Th key={header}>{header}</Table.Th>
              })}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {tbodyData.map((row: any, index: any) => {
              return (
                <Table.Tr key={index}>
                  {theadData.map((key: any, index: any) => {
                    return <Table.Td key={row[key]}>{row[key]}</Table.Td>

                  })}
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </>
  );
}

