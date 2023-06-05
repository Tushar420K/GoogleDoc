import React,{useState} from 'react';
import logo from './../google-docs.png';
import './../css/style.css'
import './../css/index.css'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import IosShareTwoToneIcon from '@mui/icons-material/IosShareTwoTone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import HistoryIcon from '@mui/icons-material/History';
import OfflinePinOutlinedIcon from '@mui/icons-material/OfflinePinOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import ModeIcon from '@mui/icons-material/Mode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import DoneIcon from '@mui/icons-material/Done';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import ShapeLineIcon from '@mui/icons-material/ShapeLine';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import MoodIcon from '@mui/icons-material/Mood';
import HomeMiniOutlinedIcon from '@mui/icons-material/HomeMiniOutlined';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import SubjectIcon from '@mui/icons-material/Subject';
import PostAddIcon from '@mui/icons-material/PostAdd';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import CalculateIcon from '@mui/icons-material/Calculate';
import AudioFileOutlinedIcon from '@mui/icons-material/AudioFileOutlined';
import AdUnitsOutlinedIcon from '@mui/icons-material/AdUnitsOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import InsertPageBreakOutlinedIcon from '@mui/icons-material/InsertPageBreakOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TagIcon from '@mui/icons-material/Tag';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import AutofpsSelectIcon from '@mui/icons-material/AutofpsSelect';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import DatasetLinkedOutlinedIcon from '@mui/icons-material/DatasetLinkedOutlined';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

export default function Header() {

    const handleclick = (event) =>{
        document.getElementsByClassName('title')[0].style.width = String((event.target.value.length+1) * 11) +  "px";
        settext(event.target.value);
    };
    let x = [1,1,1,1,1,1,1,1];
    const drop = (event) =>{
        let get = document.getElementsByClassName('file-on')
        if(get.length){
            get[0].classList.toggle('file-open');
            x[0]=1;
        }
    };
    
    const drop1 = (event) =>{
        let get = document.getElementsByClassName('edit-on')
        if(get.length){
            get[0].classList.toggle('edit-open');
            x[1]=1;
        }
    };
    
    const drop2 = (event) =>{
        let get = document.getElementsByClassName('view-on')
        if(get.length){
            get[0].classList.toggle('view-open');
            x[2]=1;
        }
    };
    
    const drop3 = (event) =>{
        let get = document.getElementsByClassName('insert-on')
        if(get.length){
            get[0].classList.toggle('insert-open');
            x[3]=1;
        }
    };
    
    const drop4 = (event) =>{
        let get = document.getElementsByClassName('format-on')
        if(get.length){
            get[0].classList.toggle('format-open');
            x[4]=1;
        }
    };
    
    const drop5 = (event) =>{
        let get = document.getElementsByClassName('tools-on')
        if(get.length){
            get[0].classList.toggle('tools-open');
            x[5]=1;
        }
    };
    
    const drop6 = (event) =>{
        let get = document.getElementsByClassName('extension-on')
        if(get.length){
            get[0].classList.toggle('extension-open');
            x[6]=1;
        }
    };
    
    const drop7 = (event) =>{
        let get = document.getElementsByClassName('help-on')
        if(get.length){
            get[0].classList.toggle('help-open');
            x[7]=1;
        }
    };

    const handletick = (event) =>{
        let g = event.target.getElementsByClassName('icon-closed');
        if(g.length)
            g[0].classList.toggle('icon-open');
    }

    window.onclick = () =>{
        let get = document.getElementsByClassName('file-open')
        if(get.length && x[0]===0)
            get[0].classList.toggle('file-open');
        get = document.getElementsByClassName('edit-open')
        if(get.length && x[1]===0)
            get[0].classList.toggle('edit-open');
        get = document.getElementsByClassName('view-open')
        if(get.length && x[2]===0)
            get[0].classList.toggle('view-open');
        get = document.getElementsByClassName('insert-open')
        if(get.length && x[3]===0)
            get[0].classList.toggle('insert-open');
        get = document.getElementsByClassName('format-open')
        if(get.length && x[4]===0)
            get[0].classList.toggle('format-open');
        get = document.getElementsByClassName('tools-open')
        if(get.length && x[5]===0)
            get[0].classList.toggle('tools-open');
        get = document.getElementsByClassName('extension-open')
        if(get.length && x[6]===0)
            get[0].classList.toggle('extension-open');
        get = document.getElementsByClassName('help-open')
        if(get.length && x[7]===0)
            get[0].classList.toggle('help-open');
        x = [0,0,0,0,0,0,0,0];
    }

    const [text,settext] = useState("Untitled document");
  return (
    // <>
    <div className='head'>
        <div className='left'>
            <div className='logo-img'>
                <img src={logo} height={'34px'} width={'34px'} alt="Logo"/>
            </div>
            <div className='bar'>
                <div className='name'>
                    <input className='title' value={text} onChange={handleclick}></input>
                    <button className='top-btn'><StarBorderIcon fontSize='small'/></button>
                    <button className='top-btn'><AddToDriveIcon fontSize='small'/></button>
                    <button className='top-btn'><CloudDoneOutlinedIcon fontSize='small'/></button>
                </div>
                <div className='menu'>
                    <div className='btn-1'>
                        <button className='select btn' onClick={drop}>File</button>
                        <ul className='file-on'>
                            <button className='option-btn'><StickyNote2Icon className='option-icon' fontSize='medium'/><li>New</li></button>
                            <button className='option-btn'><FolderOpenIcon className='option-icon' fontSize='medium'/><li>Open</li></button>
                            <button className='option-btn'><FolderCopyOutlinedIcon className='option-icon' fontSize='medium'/><li>Make a copy</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><IosShareTwoToneIcon className='option-icon' fontSize='medium'/><li>Share</li></button>
                            <button className='option-btn'><EmailOutlinedIcon className='option-icon' fontSize='medium'/><li>Email</li></button>
                            <button className='option-btn'><FileDownloadIcon className='option-icon' fontSize='medium'/><li>Download</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><DriveFileRenameOutlineOutlinedIcon className='option-icon' fontSize='medium'/><li>Rename</li></button>
                            <button className='option-btn'><DriveFileMoveOutlinedIcon className='option-icon' fontSize='medium'/><li>Move</li></button>
                            <button className='option-btn'><AddToDriveOutlinedIcon className='option-icon' fontSize='medium'/><li>Add shortcut to Drive</li></button>
                            <button className='option-btn'><DeleteIcon className='option-icon' fontSize='medium'/><li>Move to trash</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><HistoryIcon className='option-icon' fontSize='medium'/><li>Version history</li></button>
                            <button className='option-btn'><OfflinePinOutlinedIcon className='option-icon' fontSize='medium'/><li>Make offline available</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><InfoOutlinedIcon className='option-icon' fontSize='medium'/><li>Detail</li></button>
                            <button className='option-btn'><LanguageOutlinedIcon className='option-icon' fontSize='medium'/><li>Language</li></button>
                            <button className='option-btn'><DescriptionOutlinedIcon className='option-icon' fontSize='medium'/><li>Page setup</li></button>
                            <button className='option-btn'><LocalPrintshopOutlinedIcon className='option-icon' fontSize='medium'/><li>Print</li></button>
                        </ul>
                    </div>
                    <div className='btn-1'>
                        <button className='select btn' onClick={drop1}>Edit</button>
                        <ul className='edit-on'>
                            <button className='option-btn'><RotateLeftIcon className='option-icon' fontSize='medium'/><li>Undo</li></button>
                            <button className='option-btn'><RotateRightIcon className='option-icon' fontSize='medium'/><li>Redo</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><ContentCopyIcon className='option-icon' fontSize='medium'/><li>Copy</li></button>
                            <button className='option-btn'><ContentCutIcon className='option-icon' fontSize='medium'/><li>Cut</li></button>
                            <button className='option-btn'><ContentPasteIcon className='option-icon' fontSize='medium'/><li>Paste</li></button>
                            <button className='option-btn'><ContentPasteGoIcon className='option-icon' fontSize='medium'/><li>Paste with formatting</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><SelectAllIcon className='option-icon' fontSize='medium'/><li>Select All</li></button>
                            <button className='option-btn'><DeleteOutlineIcon className='option-icon' fontSize='medium'/><li>Delete</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><FindReplaceIcon className='option-icon' fontSize='medium'/><li>Find and replace</li></button>
                        </ul>
                    </div>
                    <div className='btn-1'>
                        <button className='select btn' onClick={drop2}>View</button>
                        <ul className='view-on'>
                            <button className='option-btn'><ModeIcon className='option-icon' fontSize='medium'/><li>Mode</li></button>
                            <div className='br'></div>
                            <li><button className='option-btn' onClick={handletick}><DoneIcon className='icon-closed' fontSize='medium'/>Show print layout</button></li>
                            <li><button className='option-btn' onClick={handletick}><DoneIcon className='icon-closed' fontSize='medium'/>Show ruler</button></li>
                            <li><button className='option-btn' onClick={handletick}><DoneIcon className='icon-closed' fontSize='medium'/>Show outline</button></li>
                            <li><button className='option-btn' onClick={handletick}><DoneIcon className='icon-closed' fontSize='medium'/>Show equation toolbar</button></li>
                            <li><button className='option-btn' onClick={handletick}><DoneIcon className='icon-closed' fontSize='medium'/>Show non-printing characters</button></li>
                            <div className='br'></div>
                            <button className='option-btn'><FullscreenIcon className='option-icon' fontSize='medium'/><li>Full screen</li></button>
                        </ul>
                    </div>
                    <div className='btn-1'>
                        <button className='select btn' onClick={drop3}>insert</button>
                        <ul className='insert-on'>
                            <button className='option-btn'><CropOriginalIcon className='option-icon' fontSize='medium'/><li>Image</li></button>
                            <button className='option-btn'><TableChartOutlinedIcon className='option-icon' fontSize='medium'/><li>Table</li></button>
                            <button className='option-btn'><ShapeLineIcon className='option-icon' fontSize='medium'/><li>Drawing</li></button>
                            <button className='option-btn'><InsertChartOutlinedIcon className='option-icon' fontSize='medium'/><li>Chart</li></button>
                            <button className='option-btn'><HorizontalRuleOutlinedIcon className='option-icon' fontSize='medium'/><li>Horizontal line</li></button>
                            <button className='option-btn'><MoodIcon className='option-icon' fontSize='medium'/><li>Emoji</li></button>
                            <button className='option-btn'><HomeMiniOutlinedIcon className='option-icon' fontSize='medium'/><li>Smart chips</li></button>
                            <button className='option-btn'><ArrowDropDownCircleIcon className='option-icon' fontSize='medium'/><li>Dropdown</li></button>
                            <button className='option-btn'><SubjectIcon className='option-icon' fontSize='medium'/><li>Footnote</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><PostAddIcon className='option-icon' fontSize='medium'/><li>Building blocks</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><FormatItalicIcon className='option-icon' fontSize='medium'/><li>Special characters</li></button>
                            <button className='option-btn'><CalculateIcon className='option-icon' fontSize='medium'/><li>Equation</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><AudioFileOutlinedIcon className='option-icon' fontSize='medium'/><li>Watermark</li></button>
                            <button className='option-btn'><AdUnitsOutlinedIcon className='option-icon' fontSize='medium'/><li>Headers and footers</li></button>
                            <button className='option-btn'><TagOutlinedIcon className='option-icon' fontSize='medium'/><li>Page numbers</li></button>
                            <button className='option-btn'><InsertPageBreakOutlinedIcon className='option-icon' fontSize='medium'/><li>Break</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><InsertLinkOutlinedIcon className='option-icon' fontSize='medium'/><li>Link</li></button>
                            <button className='option-btn'><MarkChatUnreadOutlinedIcon className='option-icon' fontSize='medium'/><li>Comment</li></button>
                        </ul>
                    </div>
                    <div className='btn-1'>
                        <button className='select btn' onClick={drop4}>Format</button>
                        <ul className='format-on'>
                            <button className='option-btn'><FormatBoldIcon className='option-icon' fontSize='medium'/><li>Text</li></button>
                            <button className='option-btn'><ViewHeadlineIcon className='option-icon' fontSize='medium'/><li>Paragraph styles</li></button>
                            <button className='option-btn'><FormatIndentIncreaseIcon className='option-icon' fontSize='medium'/><li>Align & indent</li></button>
                            <button className='option-btn'><FormatLineSpacingIcon className='option-icon' fontSize='medium'/><li>Line & paragraph spacing</li></button>
                            <button className='option-btn'><ViewColumnIcon className='option-icon' fontSize='medium'/><li>Columns</li></button>
                            <button className='option-btn'><FormatListBulletedIcon className='option-icon' fontSize='medium'/><li>Bullets & numbering</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><AdUnitsOutlinedIcon className='option-icon' fontSize='medium'/><li>Headers and footers</li></button>
                            <button className='option-btn'><TagIcon className='option-icon' fontSize='medium'/><li>Page numbers</li></button>
                            <button className='option-btn'><RestorePageIcon className='option-icon' fontSize='medium'/><li>Page orientation</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><TableChartOutlinedIcon className='option-icon' fontSize='medium'/><li>Table</li></button>
                            <button className='option-btn'><CropOriginalIcon className='option-icon' fontSize='medium'/><li>Image</li></button>
                            <button className='option-btn'><HorizontalRuleOutlinedIcon className='option-icon' fontSize='medium'/><li>Borders and lines</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><FormatClearIcon className='option-icon' fontSize='medium'/><li>Clear formatting</li></button>
                        </ul>
                    </div>
                    <div className='btn-1'>
                        <button className='select btn' onClick={drop5}>Tools</button>
                        <ul className='tools-on'>
                            <button className='option-btn'><AutofpsSelectIcon className='option-icon' fontSize='medium'/><li>Spelling and grammar</li></button>
                            <button className='option-btn'><StickyNote2Icon className='option-icon' fontSize='medium'/><li>Word count</li></button>
                            <button className='option-btn'><RateReviewOutlinedIcon className='option-icon' fontSize='medium'/><li>Review suggested edits</li></button>
                            <button className='option-btn'><CompareArrowsOutlinedIcon className='option-icon' fontSize='medium'/><li>Compare documents</li></button>
                            <button className='option-btn'><FormatQuoteIcon className='option-icon' fontSize='medium'/><li>Citations</li></button>
                            <button className='option-btn'><ReviewsOutlinedIcon className='option-icon' fontSize='medium'/><li>Explore</li></button>
                            <button className='option-btn'><DatasetLinkedOutlinedIcon className='option-icon' fontSize='medium'/><li>Linked objects</li></button>
                            <button className='option-btn'><PlagiarismOutlinedIcon className='option-icon' fontSize='medium'/><li>Dictionary</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><TranslateOutlinedIcon className='option-icon' fontSize='medium'/><li>Translate documents</li></button>
                            <button className='option-btn'><KeyboardVoiceOutlinedIcon className='option-icon' fontSize='medium'/><li>Voice typing</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><NotificationsNoneOutlinedIcon className='option-icon' fontSize='medium'/><li>Notification settings</li></button>
                            <button className='option-btn'><PsychologyOutlinedIcon className='option-icon' fontSize='medium'/><li>Preferences</li></button>
                            <button className='option-btn'><AccessibilityNewOutlinedIcon className='option-icon' fontSize='medium'/><li>Accessibility</li></button>
                        </ul>
                    </div>
                    <div className='btn-1'>
                        <button className='select btn' onClick={drop6}>Extensions</button>
                        <ul className='extension-on'>
                            <button className='option-btn'><PlaylistAddOutlinedIcon className='option-icon' fontSize='medium'/><li>Add-ons</li></button>
                            <button className='option-btn'><MedicationOutlinedIcon className='option-icon' fontSize='medium'/><li>Add Script</li></button>
                        </ul>
                    </div>
                    <div className='btn-1'>
                        <button className='select btn' onClick={drop7}>Help</button>
                        <ul className='help-on'>
                            <div className='help-div'><input className='help-in'></input></div>
                            <div className='br'></div>
                            <button className='option-btn'><PlaylistAddOutlinedIcon className='option-icon' fontSize='medium'/><li>Add-ons</li></button>
                            <button className='option-btn'><MedicationOutlinedIcon className='option-icon' fontSize='medium'/><li>Add Script</li></button>
                            <button className='option-btn'><MedicationOutlinedIcon className='option-icon' fontSize='medium'/><li>Add Script</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><PlaylistAddOutlinedIcon className='option-icon' fontSize='medium'/><li>Add-ons</li></button>
                            <button className='option-btn'><MedicationOutlinedIcon className='option-icon' fontSize='medium'/><li>Add Script</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><PlaylistAddOutlinedIcon className='option-icon' fontSize='medium'/><li>Add-ons</li></button>
                            <button className='option-btn'><MedicationOutlinedIcon className='option-icon' fontSize='medium'/><li>Add Script</li></button>
                            <div className='br'></div>
                            <button className='option-btn'><PlaylistAddOutlinedIcon className='option-icon' fontSize='medium'/><li>Add-ons</li></button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='right'>
                <button className='version'><HistoryIcon sx={{fontSize:30}}/></button>
                <button className='comment'><CommentOutlinedIcon sx={{fontSize:25}}/></button>
                <div className='meet'>
                    <button className='meet-icon'>
                        <VideocamOutlinedIcon sx={{fontSize:30}}/>
                        <ArrowDropDownOutlinedIcon sx={{fontSize:25}}/>
                    </button>
                </div>
                <div className='share'>
                    <button className='share-icon'>
                        <PublicOutlinedIcon sx={{fontSize:20}}/>
                        <p>Share</p>
                    </button>
                </div>
                <div className='user'>
                    <button className='user-btn'>
                            <h4>T</h4>
                    </button>
                </div>
        </div>
    </div>
  )
}
