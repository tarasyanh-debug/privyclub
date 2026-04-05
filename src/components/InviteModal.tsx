import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface InviteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InviteModal = ({ open, onOpenChange }: InviteModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        <DialogTitle className="sr-only">Подать заявку</DialogTitle>
        <iframe
          src="https://privyclub.tilda.ws/invite"
          width="100%"
          height="600"
          frameBorder="0"
          className="block"
        />
      </DialogContent>
    </Dialog>
  );
};

export default InviteModal;
