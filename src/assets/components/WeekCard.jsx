"use client";

import { Card } from "flowbite-react";
import { ListGroup } from "flowbite-react";

export default function WeekCard({ n }) {
  return (
    <ListGroup>
      <ListGroup.Item active href="/list-group">
        <p>{n}</p>
      </ListGroup.Item>
      <ListGroup.Item href="/list-group">Week 01</ListGroup.Item>
      <ListGroup.Item href="/list-group">Week 02</ListGroup.Item>
      <ListGroup.Item href="/list-group">Week 03</ListGroup.Item>
      <ListGroup.Item href="/list-group">Week 04</ListGroup.Item>
      <ListGroup.Item href="/list-group">Week 05</ListGroup.Item>
      <ListGroup.Item href="/list-group">Week 06</ListGroup.Item>
      <ListGroup.Item href="/list-group">Week 07</ListGroup.Item>
      <ListGroup.Item href="/list-group">Week 08</ListGroup.Item>
      <ListGroup.Item href="/list-group">Week 09</ListGroup.Item>
      <ListGroup.Item href="/list-group">Week 10</ListGroup.Item>
      <ListGroup.Item href="/list-group">Week 11</ListGroup.Item>
      <ListGroup.Item href="/list-group">Week 12</ListGroup.Item>
    </ListGroup>
  );
}
