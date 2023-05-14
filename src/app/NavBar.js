'use client'
import { createContext } from 'react'
import Link from 'next/link';
import Image from 'next/image'

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

{/* <Box sx={{ flexGrow: 1, alignItems: 'right' }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {/* <Image
              src="/logo.png"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          <Typography variant="h6" component="div">
            <Button color="inherit">
            <Link href="/prj/estudiando-progreso/">ECOMAPA</Link>
            </Button>
          </Typography>
          <Typography variant="h6" component="div">
            <Button color="inherit">
            <Link href="/blog">BLOG</Link>
            </Button>
          </Typography>
          <Typography variant="h6" component="div">
            <Button color="inherit">
              <Link href="/contacto">CONTACTO</Link>
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box> */}