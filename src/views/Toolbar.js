import React from 'react'
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

import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { mappingObject } from './../mapping/mapping';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function Toolbar(props) {

    const {toolbarState,setToolbarState} = props;
    
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
                <UndoOutlined className='toolbar-btn' onClick={handleClick} id="undIcon" sx={{fontSize:'31px'}}/>
                <RedoOutlined className='toolbar-btn' onClick={handleClick} id="redoIcon" sx={{fontSize:'31px'}}/>
                <LocalPrintshopOutlined className='toolbar-btn' onClick={handleClick} id="printIcon" sx={{fontSize:'31px'}}/>
                <SpellcheckOutlined className='toolbar-btn' onClick={handleClick} id="spellIcon" sx={{fontSize:'31px'}}/>
                <ImagesearchRollerOutlined className='toolbar-btn' onClick={handleClick} id="imageIcon" sx={{fontSize:'31px'}}/>
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
                <RemoveOutlinedIcon className='toolbar-btn' id="minus" onClick={handleClick} sx={{fontSize:'23px'}}/>
                <input className='fontsize' value ={12}/>
                <AddOutlinedIcon className='toolbar-btn' id="plus" onClick={handleClick} sx={{fontSize:'23px'}}/>
            </div>
            <div className='vbr'></div>
            <div className="container">
                <FormatBoldOutlined className='toolbar-btn' id="boldIcon" onClick={handleClick} sx={{fontSize:'31px'}}/>
                <FormatItalicOutlined className='toolbar-btn' id="italicIcon" onClick={handleClick} sx={{fontSize:'31px'}}/>
                <FormatUnderlinedOutlined className='toolbar-btn' id="underlineIcon" onClick={handleClick} sx={{fontSize:'31px'}}/>
                <FormatColorTextOutlined className='toolbar-btn' id="colorIcon" onClick={handleClick} sx={{fontSize:'31px'}}/>
                <BorderColorOutlined className='toolbar-btn' id="highlightIcon" onClick={handleClick} sx={{fontSize:'31px'}}/>
            </div>
            <div className='vbr'></div>
            <div className="container">
                <InsertLinkOutlined className='toolbar-btn' id="insertIcon" onClick={handleClick} sx={{fontSize:'31px'}}/>
                <AddCommentOutlined className='toolbar-btn' id="commentIcon" onClick={handleClick} sx={{fontSize:'31px'}}/>
                <ImageOutlined className='toolbar-btn' id="imageOutlineIcon" onClick={handleClick} sx={{fontSize:'31px'}}/>
            </div>
            <div className='vbr'></div>
            <div className="container">
                <FormatAlignCenterOutlined className='toolbar-btn' id="alignIcon" onClick={handleClick} sx={{fontSize:'31px'}}/>
                <FormatLineSpacingOutlined className='toolbar-btn' id="lineSpaceIcon" onClick={handleClick} sx={{fontSize:'31px'}}/>
                <ChecklistOutlined className='toolbar-btn' id="checkListIcon" onClick={handleClick} sx={{fontSize:'31px'}}/>
                <FormatListBulletedOutlined className='toolbar-btn' id="bulletIcon" onClick={handleClick} sx={{fontSize:'31px'}}/>
                <FormatListNumberedOutlined className='toolbar-btn' id="numberListIcon" onClick={handleClick} sx={{fontSize:'31px'}}/>
                <FormatIndentDecreaseOutlined className='toolbar-btn' id="indentDecIcon" onClick={handleClick} sx={{fontSize:'31px'}}/>
                <FormatIndentIncreaseOutlined className='toolbar-btn' id="indentIncIcon" onClick={handleClick} sx={{fontSize:'31px'}}/>
                <FormatClearOutlined className='toolbar-btn' id="clearOutIcon" onClick={handleClick} sx={{fontSize:'31px'}}/>
            </div>
        </div>
        <div className='container-right'>
            <div className='editing-btn'>
                <EditOutlinedIcon/>
                <p>Editing</p>
            </div>
            <ExpandLessOutlinedIcon className='toolbar-btn' onClick={handleClick} sx={{fontSize:'31px'}}/>
        </div>
    </div>
  )
}
