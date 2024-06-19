import { funGetUserDefaultFront } from '@/modules/user';
import ListCandidates from "./back/view/list_candidate";
import AddCandidate from "./back/view/add_candidate";
import EditCandidate from "./back/view/edit_candidate";
import funGetCandidateByArea from "./back/fun/get_candidate_by_area";
import funGetOneCandidate from "./back/fun/get_one_candidate";
import funGetCandidateActiveByArea from "./back/fun/get_candidate_active_by_area";
import ModalAddCandidate from "./back/component/modal_add_candidate";
import ModalDelCandidate from "./back/component/modal_del_candidate";
import ModalEditCandidate from "./back/component/modal_edit_candidate";
import TableCandidate from "./back/component/table_candidate";
import funAddCandidate from "./back/fun/add_candidate";
import funEditCandidate from "./back/fun/edit_candidate";
import funSetStatusCandidate from "./back/fun/set_status_candidate";
import { funGetOneCandidateFront } from './front/fun/get_one_candidate_front';
import funGetAllCandidateFront from './front/fun/get_all_candidate_front';

export { funGetCandidateActiveByArea }
export { funGetOneCandidate }
export { funGetCandidateByArea }
export { ListCandidates }
export { AddCandidate }
export { EditCandidate }
export { ModalAddCandidate }
export { ModalDelCandidate }
export { ModalEditCandidate }
export { TableCandidate }
export { funAddCandidate }
export { funEditCandidate }
export { funSetStatusCandidate }
export { funGetUserDefaultFront }
export { funGetOneCandidateFront }
export { funGetAllCandidateFront }
