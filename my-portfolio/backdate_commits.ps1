# backdate_commits.ps1
# Run from repository root in PowerShell

$days = @(5,17,23,24,25,26,27)
$messages = @(
  "Updated components","Improved layout","Fixed animation","Refactored UI logic",
  "Added new feature","Optimized performance","Minor bug fixes","Updated dependencies",
  "Improved user experience","Cleaned up code","Fixed typo","Enhanced visuals",
  "UI consistency updates","Adjusted gradients","Improved readability","Polished animations",
  "Updated assets","Improved performance"
)

# target commits count
$target = 16
$count = 0

# get current branch
$branch = (git rev-parse --abbrev-ref HEAD).Trim()
Write-Host "Current branch:" $branch

foreach ($d in $days) {
  # create 2-3 commits per date
  $commitsForDay = Get-Random -Minimum 2 -Maximum 4
  for ($i=0; $i -lt $commitsForDay; $i++) {
    if ($count -ge $target) { break }
    $msg = $messages | Get-Random

    # compute ISO 8601 timestamp (local time)
    $dt = (Get-Date).AddDays(-$d)
    # set a random time during that day to look natural
    $hour = Get-Random -Minimum 8 -Maximum 22
    $minute = Get-Random -Minimum 0 -Maximum 59
    $second = Get-Random -Minimum 0 -Maximum 59
    $dt = Get-Date -Year $dt.Year -Month $dt.Month -Day $dt.Day -Hour $hour -Minute $minute -Second $second
    $iso = $dt.ToString("yyyy-MM-ddTHH:mm:ssK")  # ISO format

    # append to backfill file
    $line = "$iso - $msg"
    Add-Content -Path "./backfill.txt" -Value $line

    # stage file
    git add backfill.txt

    # set env vars for this process and commit
    $env:GIT_AUTHOR_DATE = $iso
    $env:GIT_COMMITTER_DATE = $iso

    git commit -m "$msg (backfill $iso)"

    # unset (cleanup)
    Remove-Item Env:\GIT_AUTHOR_DATE
    Remove-Item Env:\GIT_COMMITTER_DATE

    $count++
    Write-Host "Created commit $count for $d days ago: $iso"
    Start-Sleep -Milliseconds 200
  }
  if ($count -ge $target) { break }
}

Write-Host "Pushing to origin/$branch ..."
git push origin $branch
Write-Host "Done. Created $count commits."
