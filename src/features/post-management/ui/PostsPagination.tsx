import { Button } from "../../shared/ui"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../shared/ui"

interface PostsPaginationProps {
  total: number
  skip: number
  limit: number
  onLimitChange: (limit: number) => void
  onSkipChange: (skip: number) => void
}

export const PostsPagination = ({ total, skip, limit, onLimitChange, onSkipChange }: PostsPaginationProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span>표시</span>
        <Select value={limit.toString()} onValueChange={(value: string) => onLimitChange(Number(value))}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="10" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="30">30</SelectItem>
          </SelectContent>
        </Select>
        <span>항목</span>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" disabled={skip === 0} onClick={() => onSkipChange(Math.max(0, skip - limit))}>
          이전
        </Button>
        <Button variant="outline" disabled={skip + limit >= total} onClick={() => onSkipChange(skip + limit)}>
          다음
        </Button>
      </div>
    </div>
  )
}
