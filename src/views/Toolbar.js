import React, { useEffect } from 'react'
import './../css/Editor.css'

import {
  UndoOutlined,
  RedoOutlined,
  LocalPrintshopOutlined,
  SpellcheckOutlined,
  ImagesearchRollerOutlined,
  FormatBoldOutlined,
  FormatItalicOutlined,
  FormatUnderlinedOutlined,
  FormatColorTextOutlined,
  BorderColorOutlined,
  InsertLinkOutlined,
  AddCommentOutlined,
  ImageOutlined,
  FormatAlignCenterOutlined,
  FormatLineSpacingOutlined,
  ChecklistOutlined,
  FormatListBulletedOutlined,
  FormatListNumberedOutlined,
  FormatIndentDecreaseOutlined,
  FormatIndentIncreaseOutlined,
  FormatClearOutlined,
  
} from '@mui/icons-material';

import { useState } from 'react';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import './../mapping/mapping'
import { mappingObject } from './../mapping/mapping';


export default function Toolbar(props) {

    const {toolbarState,setToolbarState} = props;
    const [values,setValues] = useState({
    });
    
    const updateToolbarState = (id) => {
        document.execCommand(mappingObject[id], false, null);
        setToolbarState((prevValues) => ({
          ...prevValues,
          [id]: !prevValues[id]
        }));
    };
    
    const handleClick = (event) => {
        updateToolbarState(event.currentTarget.id);
      };
      
    return (
    <div className='toolbar-container'>
        <div className='toolbar-main'>
            <div className="container">
                <UndoOutlined className='toolbar-btn' onClick={handleClick} id="undIcon" sx={{fontSize:'29px'}}/>
                <RedoOutlined className='toolbar-btn' onClick={handleClick} id="redoIcon" sx={{fontSize:'29px'}}/>
                <LocalPrintshopOutlined className='toolbar-btn' onClick={handleClick} id="printIcon" sx={{fontSize:'29px'}}/>
                <SpellcheckOutlined className='toolbar-btn' onClick={handleClick} id="spellIcon" sx={{fontSize:'29px'}}/>
                <ImagesearchRollerOutlined className='toolbar-btn' onClick={handleClick} id="imageIcon" sx={{fontSize:'29px'}}/>
                <button className='toolbar-btn' id='btn-down-1'>100%<ArrowDropDownOutlinedIcon sx={{fontSize:'20px'}}/></button>
            </div>
            <div className='vbr'></div>
            <div className='container'>
                <div className='toolbar-btn' id='btn-down-2'>
                    <p>Normal text</p>
                    <ArrowDropDownOutlinedIcon sx={{fontSize:'20px'}}/>
                </div>
            </div>
            <div className='vbr'></div>
            <div className='container'>
                <div className='toolbar-btn' id='btn-down-3'>
                    <p>Font</p>
                    <ArrowDropDownOutlinedIcon sx={{fontSize:'20px'}}/>
                </div>
            </div>
            <div className='vbr'></div>
            <div className="container">
                <FormatBoldOutlined className='toolbar-btn' id="boldIcon" onClick={handleClick} sx={{fontSize:'29px'}}/>
                <FormatItalicOutlined className='toolbar-btn' id="italicIcon" onClick={handleClick} sx={{fontSize:'29px'}}/>
                <FormatUnderlinedOutlined className='toolbar-btn' id="underlineIcon" onClick={handleClick} sx={{fontSize:'29px'}}/>
                <FormatColorTextOutlined className='toolbar-btn' id="colorIcon" onClick={handleClick} sx={{fontSize:'29px'}}/>
                <BorderColorOutlined className='toolbar-btn' id="highlightIcon" onClick={handleClick} sx={{fontSize:'29px'}}/>
            </div>
            <div className='vbr'></div>
            <div className="container">
                <InsertLinkOutlined className='toolbar-btn' id="insertIcon" onClick={handleClick} sx={{fontSize:'29px'}}/>
                <AddCommentOutlined className='toolbar-btn' id="commentIcon" onClick={handleClick} sx={{fontSize:'29px'}}/>
                <ImageOutlined className='toolbar-btn' id="imageOutlineIcon" onClick={handleClick} sx={{fontSize:'29px'}}/>
            </div>
            <div className='vbr'></div>
            <div className="container">
                <FormatAlignCenterOutlined className='toolbar-btn' id="alignIcon" onClick={handleClick} sx={{fontSize:'29px'}}/>
                <FormatLineSpacingOutlined className='toolbar-btn' id="lineSpaceIcon" onClick={handleClick} sx={{fontSize:'29px'}}/>
                <ChecklistOutlined className='toolbar-btn' id="checkListIcon" onClick={handleClick} sx={{fontSize:'29px'}}/>
                <FormatListBulletedOutlined className='toolbar-btn' id="bulletIcon" onClick={handleClick} sx={{fontSize:'29px'}}/>
                <FormatListNumberedOutlined className='toolbar-btn' id="numberListIcon" onClick={handleClick} sx={{fontSize:'29px'}}/>
                <FormatIndentDecreaseOutlined className='toolbar-btn' id="indentDecIcon" onClick={handleClick} sx={{fontSize:'29px'}}/>
                <FormatIndentIncreaseOutlined className='toolbar-btn' id="indentIncIcon" onClick={handleClick} sx={{fontSize:'29px'}}/>
                <FormatClearOutlined className='toolbar-btn' id="clearOutIcon" onClick={handleClick} sx={{fontSize:'29px'}}/>
            </div>
        </div>
        <div className='container-right'>
            <div>
                <EditOutlinedIcon/>
                <p>Editing</p>
            </div>
            <ExpandLessOutlinedIcon className='toolbar-btn' onClick={handleClick} sx={{fontSize:'29px'}}/>
        </div>
    </div>
  )
}
